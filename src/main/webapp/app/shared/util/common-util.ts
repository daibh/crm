import { Menu } from '../model/menu.model';

export const isDefined = (obj?: any) => {
    return !(obj === undefined || obj === null);
};

export const toDeepTree = (
    oriObjs: {
        Id?: string;
        ParentId?: string;
    }[]
) => {
    const treeObj: {
        Id: string;
        ParentId: string;
        Childrens: [];
    }[] = Object.assign([], oriObjs);
    const mapper = new Map<string, { Id: string; ParentId: string }>();
    treeObj.forEach(obj => mapper.set(obj.Id, obj));
    oriObjs.forEach(obj => {
        if (isDefined(obj.ParentId)) {
            const parent: Menu = mapper.get(obj.ParentId);
            if (isDefined(parent)) {
                const o = mapper.get(obj.Id);
                if (!isDefined(parent.Childrens)) {
                    parent.Childrens = [];
                }
                parent.Childrens.push(o);
                const oIndex = treeObj.findIndex(x => x.Id === o.Id);
                treeObj.splice(oIndex, 1);
            }
        }
    });
    return treeObj;
};

export const showProperty = (obj: Object, field: string) => {
    return isDefined(obj) && obj.hasOwnProperty(field) ? obj[field] : '';
};
