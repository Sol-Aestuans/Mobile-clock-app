import React from "react";
import {render, waitFor, fireEvent} from '@testing-library/react-native';
import ClockScreen from "../../src/screens/ClockScreen";

test("clock renders", async() => {
    const { getByTestId } = render(<ClockScreen />);
    await waitFor(() => {
        const clock = getByTestId('clock');
        expect(clock).toBeTruthy();
    });
});

test("info screen button", async() => {
    const { getByTestId } = render(<ClockScreen />);

    await waitFor(() => {
        const moreInfo = getByTestId('moreInfoButton');
        expect(moreInfo).toBeTruthy();

        //click the button and render its counterpart
        fireEvent.press(moreInfo);

        const lessInfo = getByTestId('lessInfoButton');
        expect(lessInfo).toBeTruthy();

    });
});