import {addParameters, configure} from '@storybook/angular';
import theme from './theme';
import '!style-loader!css-loader!sass-loader!./scss-loader.scss';

addParameters({
    options: {
        theme
    }
});

configure(require.context('../projects/survey-component-lib', true, /\.stories\.[tj]s$/), module);
