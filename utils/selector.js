module.exports = {
    textAreaPhone: { method: 'accessibility id', selector: 'btn-phone-number' },
    phoneNumberInput: { method: 'accessibility id', selector: 'txt-area-phone-number' },
    continueButton: { method: 'xpath', selector: "/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.Button" },
    cancelVerification: { method: 'xpath', selector: '/hierarchy/android.widget.FrameLayout/android.widget.LinearLayout/android.widget.FrameLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.RelativeLayout/android.widget.LinearLayout' },
    pinInput: { method: 'accessibility id', selector: 'txt-area-pin' },
};
