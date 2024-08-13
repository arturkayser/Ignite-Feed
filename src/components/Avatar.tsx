import { ImgHTMLAttributes } from 'react';
import styles from './Avatar.module.css'

interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement> {
    hasBorder?: boolean;  // '?' significa que o campo é opicional, ou seja, não é obrigatório ter essa propriedade..
}

export function Avatar({ hasBorder = true, ...props}: AvatarProps) {
    
    return (
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar} 
            {...props}
        />
    )
} 