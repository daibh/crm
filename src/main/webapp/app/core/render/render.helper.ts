import { Injectable, RendererFactory2, Renderer2 } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class NgxRenderHelper {
    rendererHead: Renderer2 = null;
    rendererBody: Renderer2 = null;
    mockElement: HTMLLinkElement;

    constructor(rootRenderer: RendererFactory2) {
        this.rendererHead = rootRenderer.createRenderer(document.querySelector('head'), null);
        this.rendererBody = rootRenderer.createRenderer(document.querySelector('body'), null);
        this.mockElement = document.querySelector('link#loading-splash');
    }

    addStyleSheetAssets(href: string) {
        const styleSheet: HTMLLinkElement = new HTMLLinkElement();
        styleSheet.rel = 'stylesheet';
        styleSheet.href = `assets/css/${href}`;
        this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
    }

    addStyleSheetContent(href: string) {
        const styleSheet: HTMLLinkElement = new HTMLLinkElement();
        styleSheet.rel = 'stylesheet';
        styleSheet.href = `content/css/${href}`;
        this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
    }

    addStyleSheetOversea(href: string) {
        const styleSheet: HTMLLinkElement = new HTMLLinkElement();
        styleSheet.rel = 'stylesheet';
        styleSheet.href = `${href}`;
        this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
    }

    addStyleSheetPlugin(plugin: string, href: string) {
        const styleSheet: HTMLLinkElement = new HTMLLinkElement();
        styleSheet.rel = 'stylesheet';
        styleSheet.href = `assets/plugins/${plugin}/${href}`;
        this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
    }

    addStyleSheetPluginHref(href: string) {
        const styleSheet: HTMLLinkElement = new HTMLLinkElement();
        styleSheet.rel = 'stylesheet';
        styleSheet.href = `assets/plugins/${href}`;
        this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
    }

    addScriptPlugin(plugin: string, href: string) {
        const scriptPlugin: HTMLScriptElement = new HTMLScriptElement();
        scriptPlugin.src = `assets/plugins/${plugin}/${href}`;
        this.rendererBody.appendChild(document.querySelector('body'), scriptPlugin);
    }

    addScriptContent(href: string) {
        const scriptPlugin: HTMLScriptElement = new HTMLScriptElement();
        scriptPlugin.src = `content/js/${href}`;
        this.rendererBody.appendChild(document.querySelector('body'), scriptPlugin);
    }

    removeScriptPlugin(plugin: string, href: string) {
        const src = `assets/plugins/${plugin}/${href}`;
        const scriptPlugin: HTMLScriptElement = document.querySelector(`'script[src="${src}"]'`);
        scriptPlugin.remove();
    }

    removeScriptContent(href: string) {
        const src = `content/js/${href}`;
        const scriptPlugin: HTMLScriptElement = document.querySelector(`'script[src="${src}"]'`);
        scriptPlugin.remove();
    }
}
