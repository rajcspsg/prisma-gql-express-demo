import { Injectable } from "@nestjs/common";
import { PrismaService } from "./prisma.services";
import { User } from "src/graphql";

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {

  }

  async getUsers(): Promise<User[]> {
    return this.prisma.prismaUsers.findMany({})
  }
}
