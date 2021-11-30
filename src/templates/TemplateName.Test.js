import { render,screen} from '@testing-library/react';
import { TemplateName } from './TemplateName';

describe('<TemplateName/>', () => {
    it('should render', () => {
        render(<TemplateName />);
        expect(screen.getByText('TemplateName')).toBeDefined();
    });
});