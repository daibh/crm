import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IAttribute } from '../model/attribute.model';

@Injectable({
    providedIn: 'root'
})
export class AttributeService {
    constructor() {}

    public getAttributes(): Observable<IAttribute[]> {
        const attributes = [
            {
                AttributesId: 'Attribute001',
                AttributeCode: 'Attribute001',
                AttributeType: 'email',
                DataType: 'text',
                AttributeLabel: 'Email address',
                AttributeClass: 'form-control',
                DefaultValue: '',
                PrefixIcon: 'fa fa-envelope',
                SubfixIcon: '',
                IsPrefixSubfixIcon: true,
                IsVisible: true,
                IsRequired: true,
                IsTableShow: false,
                IsCategory: false,
                IsSort: false,
                IsRefer: false,
                IsReuse: false,
                IsDelete: false,
                CategoryParentCode: '',
                DetailRefer: '',
                CreateBy: '',
                CreateDate: '',
                UpDateBy: '',
                UpdateDate: ''
            },
            {
                AttributesId: 'Attribute002',
                AttributeCode: 'Attribute002',
                AttributeType: 'text',
                DataType: 'text',
                AttributeLabel: 'Username',
                AttributeClass: 'form-control',
                DefaultValue: '',
                PrefixIcon: '@',
                SubfixIcon: '',
                IsPrefixSubfixIcon: false,
                IsVisible: true,
                IsRequired: true,
                IsTableShow: false,
                IsCategory: false,
                IsSort: false,
                IsRefer: false,
                IsReuse: false,
                IsDelete: false,
                CategoryParentCode: '',
                DetailRefer: '',
                CreateBy: '',
                CreateDate: '',
                UpDateBy: '',
                UpdateDate: ''
            },
            {
                AttributesId: 'Attribute003',
                AttributeCode: 'Attribute003',
                AttributeType: 'text',
                DataType: 'number',
                AttributeLabel: 'Balance',
                AttributeClass: 'form-control',
                DefaultValue: '',
                PrefixIcon: '$',
                SubfixIcon: '.00',
                IsPrefixSubfixIcon: false,
                IsVisible: true,
                IsRequired: true,
                IsTableShow: false,
                IsCategory: false,
                IsSort: false,
                IsRefer: false,
                IsReuse: false,
                IsDelete: false,
                CategoryParentCode: '',
                DetailRefer: '',
                CreateBy: '',
                CreateDate: '',
                UpDateBy: '',
                UpdateDate: ''
            },
            {
                AttributesId: 'Attribute004',
                AttributeCode: 'Attribute004',
                AttributeType: 'password',
                DataType: 'text',
                AttributeLabel: 'Password',
                AttributeClass: 'form-control',
                DefaultValue: '',
                PrefixIcon: '',
                SubfixIcon: '',
                IsPrefixSubfixIcon: true,
                IsVisible: true,
                IsRequired: true,
                IsTableShow: false,
                IsCategory: false,
                IsSort: false,
                IsRefer: false,
                IsReuse: false,
                IsDelete: false,
                CategoryParentCode: '',
                DetailRefer: '',
                CreateBy: '',
                CreateDate: '',
                UpDateBy: '',
                UpdateDate: ''
            }
        ];
        return of(attributes);
    }
}
