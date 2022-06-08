import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { NxWelcomeComponent } from './nx-welcome.component';

export default {
  title: 'NxWelcomeComponent',
  decorators: [
    moduleMetadata({
      imports: [NxWelcomeComponent],
    })
  ],
} as Meta<NxWelcomeComponent>;

const Template: Story<NxWelcomeComponent> = (args: NxWelcomeComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}
