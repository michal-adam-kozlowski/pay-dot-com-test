import * as dotenv from 'dotenv';

dotenv.config();

const config = {
  DATABASE_URL: process.env.DATABASE_URL!,
};

export default config;