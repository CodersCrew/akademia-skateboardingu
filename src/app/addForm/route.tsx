import { FormFields } from '@/components/utils/constants';
import { Button, Card, TextInput } from '@tremor/react';
import React, { ChangeEvent, useState } from 'react';

interface ValueFormProps {
    Product: string;
    Description: string;
    Price: string;
    Quantity: string;
    Visible: string;
    Category: string;
    Photos: string;
}

interface FormFieldProps {
    description: string;
    valueForm: ValueFormProps;
    handleChange: (field: keyof ValueFormProps, value: string) => void;
}

const FormField = ({
    description,
    valueForm,
    handleChange,
}: FormFieldProps) => {
    return (
        <div className="flex flex-col gap-2 ">
            <label
                htmlFor={description}
                className="text-tremor-default text-tremor-content dark:text-dark-tremor-content mt-10"
            >
                {description}
            </label>
            <TextInput
                className="max-w-xs mt-1"
                id={description}
                placeholder=""
                value={valueForm[description as keyof ValueFormProps]}
                onChange={(e) =>
                    handleChange(
                        description as keyof ValueFormProps,
                        e.target.value,
                    )
                }
            />
        </div>
    );
};

const defaultValues: ValueFormProps = {
    Product: '',
    Description: '',
    Price: '',
    Quantity: '',
    Visible: '',
    Category: '',
    Photos: '',
};

export const AddProductForm = () => {
    const [valueForm, setValueForm] = useState(defaultValues);

    const handleChange = (field: string, value: string) => {
        setValueForm((prevValueForm) => ({
            ...prevValueForm,
            [field]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //submit
    };
    return (
        <Card className="max-w-md mt-20">
            <form
                onSubmit={(e) => {
                    handleSubmit;
                }}
            >
                {Object.values(FormFields).map((item) => (
                    <FormField
                        key={item}
                        description={item}
                        valueForm={valueForm}
                        handleChange={handleChange}
                    />
                ))}
                <div className="mt-10 flex justify-start">
                    <Button type="submit">Zapisz</Button>
                </div>
            </form>
        </Card>
    );
};
