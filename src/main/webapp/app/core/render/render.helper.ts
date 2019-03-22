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
        const src = `assets/css/${href}`;
        let styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (!styleSheet) {
            styleSheet = document.createElement('link');
            styleSheet.rel = 'stylesheet';
            styleSheet.href = src;
            this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
        }
    }

    removeStyleSheetAssets(href: string) {
        const src = `assets/css/${href}`;
        const styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (styleSheet) {
            styleSheet.remove();
        }
    }

    addStyleSheetContent(href: string) {
        const src = `content/css/${href}`;
        let styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (!styleSheet) {
            styleSheet = document.createElement('link');
            styleSheet.rel = 'stylesheet';
            styleSheet.href = src;
            this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
        }
    }

    removeStyleSheetContent(href: string) {
        const src = `content/css/${href}`;
        const styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (styleSheet) {
            styleSheet.remove();
        }
    }

    addStyleSheetOversea(href: string) {
        const src = `${href}`;
        let styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (!styleSheet) {
            styleSheet = document.createElement('link');
            styleSheet.rel = 'stylesheet';
            styleSheet.href = src;
            this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
        }
    }

    removeStyleSheetOversea(href: string) {
        const src = `${href}`;
        const styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (styleSheet) {
            styleSheet.remove();
        }
    }

    addStyleSheetPlugin(plugin: string, href: string) {
        const src = `assets/plugins/${plugin}/${href}`;
        let styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (!styleSheet) {
            styleSheet = document.createElement('link');
            styleSheet.rel = 'stylesheet';
            styleSheet.href = src;
            this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
        }
    }

    removeStyleSheetPlugin(plugin: string, href: string) {
        const src = `assets/plugins/${plugin}/${href}`;
        const styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (styleSheet) {
            styleSheet.remove();
        }
    }

    addStyleSheetPluginHref(href: string) {
        const src = `assets/plugins/${href}`;
        let styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (!styleSheet) {
            styleSheet = document.createElement('link');
            styleSheet.rel = 'stylesheet';
            styleSheet.href = src;
            this.rendererHead.insertBefore(document.querySelector('head'), styleSheet, this.mockElement);
        }
    }

    removeStyleSheetPluginHref(href: string) {
        const src = `assets/plugins/${href}`;
        const styleSheet: HTMLLinkElement = document.querySelector(`link[href="${src}"]`);
        if (styleSheet) {
            styleSheet.remove();
        }
    }

    addScriptPlugin(plugin: string, href: string) {
        const src = `assets/plugins/${plugin}/${href}`;
        let scriptPlugin: HTMLScriptElement = document.querySelector(`script[src="${src}"]`);
        if (!scriptPlugin) {
            scriptPlugin = document.createElement('script');
            scriptPlugin.src = src;
            this.rendererBody.appendChild(document.querySelector('body'), scriptPlugin);
        }
    }

    removeScriptPlugin(plugin: string, href: string) {
        const src = `assets/plugins/${plugin}/${href}`;
        const scriptPlugin: HTMLScriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptPlugin) {
            scriptPlugin.remove();
        }
    }

    addScriptContent(href: string) {
        const src = `content/js/${href}`;
        let scriptPlugin: HTMLScriptElement = document.querySelector(`script[src="${src}"]`);
        if (!scriptPlugin) {
            scriptPlugin = document.createElement('script');
            scriptPlugin.src = src;
            this.rendererBody.appendChild(document.querySelector('body'), scriptPlugin);
        }
    }

    addScriptContentToHead(href: string) {
        const src = `content/js/${href}`;
        let scriptPlugin: HTMLScriptElement = document.querySelector(`script[src="${src}"]`);

        if (scriptPlugin) {
            scriptPlugin.remove();
        }
        scriptPlugin = document.createElement('script');
        scriptPlugin.src = src;
        this.rendererHead.appendChild(document.querySelector('head'), scriptPlugin);
    }

    removeScriptContent(href: string) {
        const src = `content/js/${href}`;
        const scriptPlugin: HTMLScriptElement = document.querySelector(`script[src="${src}"]`);
        if (scriptPlugin) {
            scriptPlugin.remove();
        }
    }
}
