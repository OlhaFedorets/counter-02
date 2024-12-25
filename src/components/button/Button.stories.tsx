// import type {Meta} from '@storybook/react';
// import { action } from '@storybook/addon-actions';
//
// import { Button } from './Button'
//
// // const meta: Meta<typeof Counter> = {
// //     component: Counter,
// // }
//
// export default {
//     title: 'Button',
//     component: Button,
//
// }
//
// export const Text = () => <Button onClick={action('clicked')}>Hello</Button>;
//
// export const Emoji = () =>(
// <Button onClick={action('clicked')}>
// Emoji
// </Button>
// )
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';
import {action} from "@storybook/addon-actions";

const meta: Meta<typeof Button> = {
    component: Button
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        onClick: action('onClick'),
    },
};