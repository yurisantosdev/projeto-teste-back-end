import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Usuario, UsuarioDocument } from './schemas/usuario.schema';
// import * as bcrypt from 'bcrypt';

@Injectable()
export class UsuariosService {
  constructor(
    @InjectModel(Usuario.name) private usuarioModel: Model<UsuarioDocument>,
  ) { }

  async create(usuario: Partial<Usuario>): Promise<Usuario> {
    const saltRounds = 20;
    // const hashedPassword = await bcrypt.hash(usuario.ussenha, saltRounds);

    const createdUser = new this.usuarioModel({
      ...usuario,
      // ussenha: hashedPassword,
    });

    return createdUser.save();
  }

  async findAll(): Promise<Usuario[]> {
    return this.usuarioModel.find().exec();
  }

  async findOneByCodigo(_id: string): Promise<Usuario | null> {
    return this.usuarioModel.findById({ _id }).exec();
  }

  async findByFilter(filter: any): Promise<Usuario[] | null> {
    if (filter.usstatus === 'true') filter.usstatus = true;
    if (filter.usstatus === 'false') filter.usstatus = false;

    return this.usuarioModel.find(filter).exec();
  }

}
