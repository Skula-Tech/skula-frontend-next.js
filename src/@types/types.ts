export type Enumerate<
  N extends number,
  Acc extends number[] = []
> = Acc['length'] extends N
  ? Acc[number]
  : Enumerate<N, [...Acc, Acc['length']]>

export type TypeRange<F extends number, T extends number> =
  | Exclude<Enumerate<T>, Enumerate<F>>
  | T

export type TextStyle = {
  fontStyle?: 'smh' | 'smr' | 'xsh' | 'mdm'
}

export type HeadingStyle = {
  fontStyle?: 'xxl' | 'sxl' | 'xlh' | 'mdh'
}
