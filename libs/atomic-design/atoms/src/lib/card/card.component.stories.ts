import {IonicModule} from '@ionic/angular';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CardComponent} from "./card.component";

export default {
  title: 'atoms/CardComponent',
  // component: CardComponent,
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot(), CardComponent],
    })
  ],
  argTypes: {
    backgroundColor: {control: 'color'},
  }
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {}

