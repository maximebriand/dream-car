import {IonicModule} from '@ionic/angular';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CarCardComponent} from "@dream-car/atomic-design/molecules";

export default {
  title: 'molecules/CarCardComponent',
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot(), CarCardComponent],
    })
  ],
  argTypes: {
    backgroundColor: {control: 'color'},
    color: {control: 'color'},
  }
} as Meta<CarCardComponent>;

const Template: Story<CarCardComponent> = (args: CarCardComponent) => ({
  template: `
    <dc-car-card [backgroundColor]="backgroundColor" [color]="color">
    </dc-car-card>
  `,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {}

