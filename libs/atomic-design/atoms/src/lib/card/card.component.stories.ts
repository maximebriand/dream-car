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
    color: {control: 'color'},
  }
} as Meta<CardComponent>;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  template: `
    <dc-card [backgroundColor]="backgroundColor" [color]="color"></dc-card>
  `,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {}

