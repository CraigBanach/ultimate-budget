"use client";

// import { getAccounts } from "./AccountService";
// import AddEntry from "./AddEntry";
// import { addEntry, getEntries } from "./EntryService";

export interface CategoryDataRowRecord {
  id: string;
  name: string;
  category: string;
}

// TODO: Remove async
function Entries() {
  //   const accounts = await getAccounts();
  //   const entries = await getEntries();

  return (
    <div>
      <h1>Entries</h1>
      {/* <table>
        <thead>
          <tr>
            <th>account</th>
            <th>description</th>
            <th>amount</th>
          </tr>
        </thead>
        <tbody>
          {entries.map((entry) => {
            return (
              <tr key={entry.id}>
                <td>{entry.account.name}</td>
                <td>{entry.description}</td>
                <td>{entry.amount}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <AddEntry accountsPromise={accounts} addEntry={addEntry} /> */}
    </div>
  );
}

export default Entries;
