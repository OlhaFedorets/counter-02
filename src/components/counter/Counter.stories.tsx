import type {Meta, StoryObj} from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { Counter } from "./Counter";

const meta: Meta<typeof Counter> = {
    component: Counter,
}

export default {
    component: Counter,
}

// export default meta;
// type Story = StoryObj<typeof Counter>
//  args: {
//
//  }
// export const FirstStory = {
//
// }


export const MyCounter = () => {
    return <div>hello</div>
}

export const MyCounter2 = () => {
    return <div>hell, guys</div>
}

