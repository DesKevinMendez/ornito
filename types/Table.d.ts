export interface TableField<T> {
    label: string;
    key: keyof T;
    format?: (row: T) => string;
    slot?: string;
    width?: string | number;
    sortable?: boolean;
    searchable?: boolean;
}
