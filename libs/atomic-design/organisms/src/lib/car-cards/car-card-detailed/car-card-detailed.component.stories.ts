import {IonicModule} from '@ionic/angular';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {CarCardDetailedComponent} from "./car-card-detailed.component";

export default {
  title: 'organisms/car-cards/detailed',
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot(), CarCardDetailedComponent],
    })
  ],
  argTypes: {
    backgroundColor: {control: 'color'},
    color: {control: 'color'},
  }
} as Meta<CarCardDetailedComponent>;

const Template: Story<CarCardDetailedComponent> = (args: CarCardDetailedComponent) => ({
  template: `
    <dc-car-card [backgroundColor]="backgroundColor" [color]="color">
    </dc-car-card>
  `,
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {}

