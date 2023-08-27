import React from 'react';
import style from '../../styles/components/atoms/Tag.module.scss';

type TagDifficultyProps = {
  difficulty?: 0 | 1 | 2;
  children?: string;
};

const difficultyList = ['easy', 'medium', 'hard'];

export default function TagDifficulty({
  difficulty = 0,
  children,
}: TagDifficultyProps) {
  const selectedDifficulty = difficultyList[difficulty];
  const difficultyText = children
    ? children
    : selectedDifficulty.charAt(0).toUpperCase() + selectedDifficulty.slice(1);

  return (
    <span className={`${style.tag} ${children ? 'text' : selectedDifficulty}`}>
      {difficultyText}
    </span>
  );
}
