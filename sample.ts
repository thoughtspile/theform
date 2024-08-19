import { getFormValue, customValidations, domErrorMessages, invalid, setFormErrors, submitController } from "./src";

type FormState = {
    receiver: string;
};

const form = document.querySelector('form#payment') as HTMLFormElement;

customValidations<FormState>(form, {
    receiver: (v) => {
        if (!v || v.startsWith('40817')) invalid('Account number must start with 40817');
    }
});
domErrorMessages(form);
submitController(form, () => {
    console.log(getFormValue(form));
    return new Promise((_, fail) => {
        setTimeout(() => {
            setFormErrors(form, { receiver: 'account blocked' });
            fail();
        }, 1000);
    });
});
