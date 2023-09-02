/* Instruments */

export enum Instruments {
    Oboe = 'oboe',
    Cello = 'cello',
    ChamberMusic = 'chamber-music',
    Clarinet = 'clarinet',
    Flute = 'flute',
    Piano = 'piano',
    Saxo = 'saxo',
    Trombone = 'trombone',
    Viola = 'viola',
    Violin = 'violin',
    Voice = 'voice'
}


export interface InstrumentsProps {
   instrument: Instruments
}