import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UsuarioDocument = Usuario & Document;

@Schema()
export class Usuario {
  @Prop({ required: true })
  usnome: string;

  @Prop({ required: true })
  ussenha: string;

  @Prop({ required: true })
  usstatus: boolean;
}

export const UsuarioSchema = SchemaFactory.createForClass(Usuario);
