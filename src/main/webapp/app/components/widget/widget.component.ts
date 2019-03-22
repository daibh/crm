import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AttributeService } from 'app/shared/services/attribute.service';
import { IAttribute, Attribute } from 'app/shared/model/attribute.model';
import { NgxRenderHelper } from 'app/core/render/render.helper';

@Component({
    selector: 'ngx-widget',
    templateUrl: './widget.component.html',
    styles: []
})
export class WidgetComponent implements OnInit, AfterViewInit {
    attributes: IAttribute[];
    newAttribute: IAttribute;

    constructor(private attributeService: AttributeService, private ngxRenderHelper: NgxRenderHelper) {
        this.newAttribute = new Attribute();
    }

    ngOnInit() {
        this.onInitComponent();
    }

    ngAfterViewInit() {
        setTimeout(() => {
            this.ngxRenderHelper.addScriptContentToHead('plugin.js');
        }, 0);
    }

    private onInitComponent() {
        this.attributeService.getAttributes().subscribe(attributes => {
            this.attributes = attributes;
        });
    }

    addComponent() {
        this.attributes.push(this.newAttribute);
        this.newAttribute = new Attribute();
    }

    cancel() {
        this.newAttribute = new Attribute();
    }

    hasPrefix = (attribute: IAttribute) => attribute && attribute.PrefixIcon && attribute.PrefixIcon.length;
    hasSubfix = (attribute: IAttribute) => attribute && attribute.SubfixIcon && attribute.SubfixIcon.length;
    hasPrefixOrSubfix = (attribute: IAttribute) => this.hasPrefix(attribute) || this.hasSubfix(attribute);

    save() {
        console.log(this.attributes);
    }
}
