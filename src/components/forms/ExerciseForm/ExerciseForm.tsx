import React, { useCallback, useEffect, useMemo } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { v4 as uuidv4 } from 'uuid';

import Clock from '@assets/svgs/clock.svg';
import Shoes from '@assets/svgs/shoes.svg';
import Weight from '@assets/svgs/weight.svg';
import usePersistForm from '@hooks/usePersistForm';
import { clearStorage } from '@utils/storage';
import NumericInput from '@components/NumericInput';

import {
  ExerciseContainer,
  ExerciseInput,
  ExerciseTypeContainer,
  RadioInput,
  ExerciseSpecsContainer,
  UnitSelect
} from './styles';
import {
  exerciseTypes,
  weightUnits,
  distanceUnits,
  timeUnits,
  STORAGE_KEY
} from './constants';
import {
  ExerciseIconMappingType,
  ExerciseType,
  ExerciseFormValues
} from './types';
import SetInputRow from '../SetInputRow';
import { Exercise } from 'types/exercises';
import { StyledOutlineButton } from 'styles';

export interface FormProps<T> {
  onSubmit: (formValues: T) => void;
}

const ExerciseForm: React.FC<FormProps<Exercise>> = ({ onSubmit }) => {
  const initialValues = {
    type: exerciseTypes.WEIGHT,
    units: weightUnits[0].value
  };

  const getDefaultValues = useCallback(() => {
    const sessionData = sessionStorage.getItem(STORAGE_KEY);
    if (sessionData) {
      try {
        const parsedData = JSON.parse(sessionData);
        return parsedData;
      } catch (err) {
        console.error(err);
      }
    }
    return initialValues;
  }, [initialValues]);

  const { register, control, handleSubmit, watch, ...methods } =
    useForm<ExerciseFormValues>({
      defaultValues: getDefaultValues()
    });
  const exerciseType = watch('type');

  const unitSelectOptions = useMemo(() => {
    if (exerciseType === exerciseTypes.WEIGHT) {
      return weightUnits;
    } else if (exerciseType === exerciseTypes.DISTANCE) {
      return distanceUnits;
    } else if (exerciseType === exerciseTypes.TIME) {
      return timeUnits;
    }

    return [];
  }, [exerciseType]);

  useEffect(() => {
    methods.setValue('units', unitSelectOptions[0].value);
  }, [unitSelectOptions]);

  const iconMappings: ExerciseIconMappingType = {
    [exerciseTypes.WEIGHT]: <Weight />,
    [exerciseTypes.DISTANCE]: <Shoes />,
    [exerciseTypes.TIME]: <Clock />
  };

  const submitHandler = (data: ExerciseFormValues) => {
    const updatedData = {
      ...data,
      sessionId: uuidv4()
    };
    onSubmit(updatedData);
    clearStorage(STORAGE_KEY);
  };

  usePersistForm<ExerciseFormValues>({
    value: methods.getValues(),
    storageKey: STORAGE_KEY
  });

  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <FormProvider
        register={register}
        control={control}
        watch={watch}
        handleSubmit={handleSubmit}
        {...methods}
      >
        <ExerciseContainer>
          <ExerciseInput
            placeholder="Exercise"
            {...register(`name`, { required: true })}
          />
          <ExerciseSpecsContainer>
            <ExerciseTypeContainer>
              {Object.values(exerciseTypes).map((exerciseType) => (
                <label htmlFor={`${exerciseType}`} key={`${exerciseType}`}>
                  <RadioInput
                    id={`${exerciseType}`}
                    {...register(`type`)}
                    type="radio"
                    value={exerciseType}
                  />
                  {iconMappings[exerciseType as ExerciseType]}
                </label>
              ))}
            </ExerciseTypeContainer>
            <UnitSelect {...register('units')}>
              {unitSelectOptions.map(({ label, value }) => {
                return (
                  <option value={value} key={value}>
                    {label}
                  </option>
                );
              })}
            </UnitSelect>
          </ExerciseSpecsContainer>
          <NumericInput
            {...register('calories')}
            units="cals"
            placeholder="Calories (Optional)"
          />
          <SetInputRow />
          <StyledOutlineButton style={{ justifySelf: 'center' }}>
            Submit
          </StyledOutlineButton>
        </ExerciseContainer>
      </FormProvider>
    </form>
  );
};

export default ExerciseForm;
