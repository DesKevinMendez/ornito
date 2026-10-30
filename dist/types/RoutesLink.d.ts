export type RoutesLinkActive = {
    starts_with: string;
} | {
    ends_with: string;
} | {
    exact: string;
} | {
    regex: string;
};
export interface RoutesLink {
    route: string;
    name: string;
    icon: any;
    active?: RoutesLinkActive;
    children?: RoutesLink[];
}
