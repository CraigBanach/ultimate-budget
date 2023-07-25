"use client";

import { ChangeEvent, useState } from "react";
import { Account } from "./AccountService";
import { Entry } from "./EntryService";

interface Props {
  accountsPromise: Array<Account>;
  addEntry: (entry: Entry) => Promise<boolean>;
}

const AddEntry = ({
  accountsPromise: accounts,
  addEntry,
}: Props): JSX.Element => {
  const [description, setDescription] = useState("hello");
  const [amount, setAmount] = useState(0);
  const [account, setAccount] = useState(accounts[0].id);

  const onChangeDescription = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setDescription(value);
  };

  const onChangeAmount = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    if (typeof +value === "number") setAmount(+value);
  };

  const addEntryClick = async () => {
    if (description && amount) {
      const currentDate = new Date();
      if (
        await addEntry({
          account: {
            id: account,
          },
          description,
          amount: +amount,
          year: currentDate.getFullYear(),
          month: currentDate.getMonth() + 1,
          day: currentDate.getDay(),
        })
      ) {
        setDescription("");
        setAmount(0);
      }
    }
  };

  return (
    <>
      <label>Category</label>
      <select
        value={account}
        onChange={({ target: { value } }) => setAccount(+value)}
      >
        {accounts.map((account) => {
          return (
            <option key={account.id} value={account.id}>
              {`${account.category} - ${account.name}`}
            </option>
          );
        })}
      </select>
      <label>description</label>
      <input value={description} onChange={onChangeDescription} />
      <label>amount</label>
      <input value={amount} onChange={onChangeAmount} type="text" />
      <button onClick={addEntryClick}>Add entry</button>
    </>
  );
};

export default AddEntry;
