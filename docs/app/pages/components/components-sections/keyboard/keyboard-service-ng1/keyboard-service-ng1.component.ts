import { ChangeDetectionStrategy, Component } from '@angular/core';
import { BaseDocumentationSection } from '../../../../../components/base-documentation-section/base-documentation-section';
import { DocumentationSectionComponent } from '../../../../../decorators/documentation-section-component';
import { IPlayground } from '../../../../../interfaces/IPlayground';
import { IPlaygroundProvider } from '../../../../../interfaces/IPlaygroundProvider';
import { playgroundAdapter } from '../../../../../services/playground/adapters/legacy-playground-adapter';

@Component({
    selector: 'uxd-keyboard-service-ng1',
    templateUrl: './keyboard-service-ng1.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush
})
@DocumentationSectionComponent('ComponentsKeyboardServiceNg1Component')
export class ComponentsKeyboardServiceNg1Component extends BaseDocumentationSection implements IPlaygroundProvider {

    playground: IPlayground = playgroundAdapter({
        html: this.snippets.raw.layoutHtml,
        htmlAttributes: {
            'ng-controller': 'KeyboardServiceDemoCtrl as vm'
        },
        js: [this.snippets.raw.controllerJs]
    });

    constructor() {
        super(require.context('./snippets/', false, /\.(html|css|js|ts)$/));
    }
}
