from pathlib import Path
import pandas as pd

SOURCE_DIR = Path('../../../destiny/stopping-methods/data/results/')
TARGET_DIR = Path('./results/')
TARGET_DIR.mkdir(exist_ok=True, parents=True)
REGISTRY_FILE = Path('../src/series_registry.csv')

if __name__ == '__main__':
    entries = []
    i = 0
    for method in SOURCE_DIR.glob('*.csv'):
        if method.stem == 'results':
            continue

        print(method.resolve())
        df = pd.read_csv(method)
        print(f'{df.shape} --> {len(df.groupby(['sim_key', 'method-hash'])):,} groups')
        for (k, h), data in df.groupby(['sim_key', 'method-hash']):
            i += 1
            target_file = TARGET_DIR / f'{i:03d}-{data.iloc[0]['dataset']}-{data.iloc[0]['sim-rep']}-{data.iloc[0]['method']}.csv'
            entries.append(
                {
                    'id': i,
                    'dataset': data.iloc[0]['dataset'],
                    'method': data.iloc[0]['method'],
                    'method_confidence_level': data.iloc[0]['method-confidence_level'] if 'method-confidence_level' in data.columns else None,
                    'method_bias': data.iloc[0]['method-bias'] if 'method-bias' in data.columns else None,
                    'method_recall_target': data.iloc[0]['method-recall_target'] if 'method-recall_target' in data.columns else None,
                    'row_count': data.shape[0],
                    'rows': data.shape[0],
                    'n_total': data.iloc[0]['n_total'],
                    'n_incl': data.iloc[0]['n_incl'],
                    'filename': target_file.name,
                },
            )

            data.rename(columns={col: col.replace('-', '_') for col in data.columns}).to_csv(target_file, index=False)

        pd.DataFrame(entries).to_csv(REGISTRY_FILE, index=False)
