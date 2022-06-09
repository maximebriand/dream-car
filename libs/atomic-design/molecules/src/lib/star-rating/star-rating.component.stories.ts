import {IonicModule} from '@ionic/angular';
import {Meta, moduleMetadata, Story} from '@storybook/angular';
import {StarRatingComponent} from "./star-rating.component";

export default {
  title: 'molecules/StarRatingComponent',
  decorators: [
    moduleMetadata({
      imports: [IonicModule.forRoot(), StarRatingComponent],
    })
  ],
  argTypes: {
    rating: {control: 'number'},
  }
} as Meta<StarRatingComponent>;

const Template: Story<StarRatingComponent> = (args: StarRatingComponent) => ({
  template: `
    <dc-star-rating [rating]="rating"></dc-star-rating>
  `,
  props: args,
});


export const Default = Template.bind({});
Default.args = {}

