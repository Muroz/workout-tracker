import React, { PropsWithChildren, ReactNode } from 'react';
import { useFieldArray, useFormContext } from 'react-hook-form';

import Cross from '@assets/svgs/cross.svg';
import GarbageBin from '@assets/svgs/garbageBin.svg';
import NumericInput from '@components/NumericInput';
import { distanceUnits, timeUnits } from '@constants/index';

import { SetContainer, SetNumberLabel, SetRowContent } from './styles';
import { StyledFlatButton } from 'styles';

interface SetRowProps extends PropsWithChildren {
  index: number;
  icon?: ReactNode;
}

const SetRow: React.FC<SetRowProps> = ({ children, index, icon }) => {
  return (
    <SetContainer>
      <SetNumberLabel>{index}</SetNumberLabel>
      <SetRowContent>{children}</SetRowContent>
      {icon && icon}
    </SetContainer>
  );
};

const SetInputRow: React.FC = () => {
  const { control, register, watch } = useFormContext();
  const { fields, remove, append } = useFieldArray({
    control,
    name: `sets`
  });
  const exerciseType = watch('type');
  const unitType = watch('units');

  return (
    <>
      {fields.map((field, index) => {
        return (
          <SetRow
            key={field.id}
            index={index + 1}
            icon={<GarbageBin fill="red" onClick={() => remove(index)} />}
          >
            {exerciseType === 'WEIGHT' && (
              <>
                <NumericInput
                  units="Reps"
                  {...register(`sets.${index}.reps`, { required: true })}
                />
                <Cross />
                <NumericInput
                  units={unitType}
                  {...register(`sets.${index}.weight`, { required: true })}
                />
              </>
            )}
            {exerciseType === 'DISTANCE' && (
              <>
                <NumericInput
                  units={unitType}
                  {...register(`sets.${index}.distance`, { required: true })}
                  placeholder="Distance"
                />
                <NumericInput
                  units={timeUnits[0].value}
                  {...register(`sets.${index}.duration`)}
                  placeholder="Duration (Optional)"
                />
              </>
            )}
            {exerciseType === 'TIME' && (
              <>
                <NumericInput
                  units={unitType}
                  {...register(`sets.${index}.duration`, { required: true })}
                  placeholder="Duration"
                />
                <NumericInput
                  units={distanceUnits[0].value}
                  {...register(`sets.${index}.distance`)}
                  placeholder="Distance (Optional)"
                />
              </>
            )}
          </SetRow>
        );
      })}
      <StyledFlatButton
        type="button"
        onClick={() => append({ weight: 0, reps: 0 })}
      >
        Add set
      </StyledFlatButton>
    </>
  );
};

export default SetInputRow;
