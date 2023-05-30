// import bcrypt from 'bcryptjs';
import * as bcrypt from '@node-rs/bcrypt';

// const algorithm = "bf-ecb";
const algorithm = 'aes-192-cbc';

(async () => {
    // const salt = await bcrypt.genSalt(10);
    // const hashed = await bcrypt.hash('123456', salt)
    // console.log(hashed);
    const match = await bcrypt.compareSync(password, hash);
    console.log(match);
})();

// .replace(/^.{3}/g, '$2b')