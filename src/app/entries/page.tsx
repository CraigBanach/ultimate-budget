import { database } from "../utils/database";

const Entries = async () => {
  const db = await database;

  const categoryData = db.sql`SELECT id, name FROM categories;`;
  const entries = db.sql`SELECT description, amount FROM entries;`;

  return <div>
    <h1>Entries</h1>
    <table>
      <thead>
        <tr>
          <th>description</th>
          <th>amount</th>
        </tr>
      </thead>
    </table>
    </div>;
};

export default Entries;
