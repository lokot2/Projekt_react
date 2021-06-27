import React, { useState } from 'react';

import { EditIcon, SaveIcon } from 'styles';
import { Paragraph, StyledInput } from './EditableParagraph.styles';

interface Props {
  children: string;
  onSave?: (newValue: string) => void;
}

const EditableParagraph: React.FC<Props> = ({children, onSave}) => {
  const [isEditMode, setEditMode] = useState<boolean>(false);
  const [value, setValue] = useState<string>(children);

  const toggleEditMode = () => {
    if (isEditMode && onSave) {
      onSave(value);
    }

    setEditMode(!isEditMode);
  }

  const handleInputChange = (ev: React.FormEvent<HTMLInputElement>) => {
    setValue(ev.currentTarget.value);
  }

  const TextElement = isEditMode ? <StyledInput value={value} onChange={handleInputChange} /> : <span>{value}</span>;
  const Icon = isEditMode ? SaveIcon : EditIcon;

  return (
    <Paragraph>
      {TextElement}
      <Icon onClick={toggleEditMode} />
    </Paragraph>
  )
}

export default EditableParagraph;