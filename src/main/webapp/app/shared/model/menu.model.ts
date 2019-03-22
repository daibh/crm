export interface IMenu {
    Id?: string;
    MenuName?: string;
    Url?: string;
    ParentId?: string;
    OrderIndex?: number;
    Icon?: string;
}

export class Menu implements IMenu {
    constructor(
        public Id?: string,
        public MenuName?: string,
        public Url?: string,
        public ParentId?: string,
        public OrderIndex?: number,
        public Icon?: string,
        public Childrens?: Menu[]
    ) {}
}
