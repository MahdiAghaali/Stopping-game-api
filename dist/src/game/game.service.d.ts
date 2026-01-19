export type DatasetT = {
    id: number;
    dataset: string;
    method: string;
    method_confidence_level: number | 'nan' | 'none';
    method_bias: number | 'nan' | 'none';
    method_recall_target: number | 'nan' | 'none';
    filename: string;
    row_count: number;
    rows: unknown;
};
export declare class GameService {
    private readonly registryPath;
    private readonly dataDir;
    loadFilesByIds(ids: number[]): Promise<DatasetT[]>;
    private readRegistry;
    private readCsvFile;
}
