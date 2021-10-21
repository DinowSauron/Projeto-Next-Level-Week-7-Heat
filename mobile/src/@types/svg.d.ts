declare module "*.svg" {
    import React from 'react';
    import { SvgProps} from 'react-svg';

    const content: React.FC<SvgProps>

    export default content
}