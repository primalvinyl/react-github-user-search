import {IntlProvider, createIntl} from 'react-intl';
import {mount, shallow} from 'enzyme';
import messages from '../src/locales/en-US.json';

export const intl = createIntl({
    locale: 'en-US',
    defaultLocale: 'en-US',
    messages
});

export function mountWithIntl(component) {
    return mount(component, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                locale: 'en-US',
                defaultLocale: 'en-US',
                messages
            },
        }
    );
}

export function shallowWithIntl(component) {
    return shallow(component, {
            wrappingComponent: IntlProvider,
            wrappingComponentProps: {
                locale: 'en-US',
                defaultLocale: 'en-US',
                messages
            }
        }
    );
}
