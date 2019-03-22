export interface IAttribute {
    AttributesId?: string;
    AttributeCode?: string;
    AttributeType?: string;
    DataType?: string;
    AttributeLabel?: string;
    AttributeClass?: string;
    DefaultValue?: string;
    PrefixIcon?: string;
    SubfixIcon?: string;
    IsPrefixSubfixIcon?: boolean;
    IsVisible?: boolean;
    IsRequired?: boolean;
    IsTableShow?: boolean;
    IsCategory?: boolean;
    IsSort?: boolean;
    IsRefer?: boolean;
    IsReuse?: boolean;
    IsDelete?: boolean;
    CategoryParentCode?: string;
    DetailRefer?: string;
    CreateBy?: string;
    CreateDate?: string;
    UpDateBy?: string;
    UpdateDate?: string;
}

export class Attribute implements IAttribute {
    constructor(
        public AttributesId?: string,
        public AttributeCode?: string,
        public AttributeType?: string,
        public DataType?: string,
        public AttributeLabel?: string,
        public AttributeClass?: string,
        public DefaultValue?: string,
        public PrefixIcon?: string,
        public SubfixIcon?: string,
        public IsPrefixSubfixIcon?: boolean,
        public IsVisible?: boolean,
        public IsRequired?: boolean,
        public IsTableShow?: boolean,
        public IsCategory?: boolean,
        public IsSort?: boolean,
        public IsRefer?: boolean,
        public IsReuse?: boolean,
        public IsDelete?: boolean,
        public CategoryParentCode?: string,
        public DetailRefer?: string,
        public CreateBy?: string,
        public CreateDate?: string,
        public UpDateBy?: string,
        public UpdateDate?: string
    ) {}
}
