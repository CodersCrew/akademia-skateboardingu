'use client';
import { FormFields } from '@/components/utils/constants';
import { Button, Card, TextInput } from '@tremor/react';
import React, { useState } from 'react';

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

export const AddForm = async () => {
    const [formData, setFormData] = useState(defaultValues);

    const handleChange = (field: keyof ValueFormProps, value: string) => {
        setFormData({
            ...formData,
            [field]: value,
        });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const response = await fetch('/api/addForm/route', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            const responseData = await response.json();
            console.log('Form submission successful:', responseData);
        }
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
                        valueForm={formData}
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
