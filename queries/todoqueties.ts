import * as SQLite from "expo-sqlite";

export const prepareTodoTable = (db: SQLite.WebSQLDatabase | {
  transaction: () => {
      executeSql: () => void;
  };
}) => {
  db.transaction((tx) => {
    tx.executeSql(
      "create table if not exists items (id integer primary key not null, done int, value text);"
    );
  });
}

export const selectFinishedTodos = (db: SQLite.WebSQLDatabase | {
  transaction: () => {
      executeSql: () => void;
  };
}, f:  (value: React.SetStateAction<any[]>) => void) => {
  db.transaction((tx) => {
    return tx.executeSql(
      `select * from items where done = 1;`,
      undefined,
      (_, { rows: { _array } }) => f(_array)
    );
  });
} 

export const selectUnFinishedTodos = (db: SQLite.WebSQLDatabase | {
  transaction: () => {
      executeSql: () => void;
  };
  //TODO any[] をtodoにする
}, f:  (value: React.SetStateAction<any[]>) => void) => {
  db.transaction((tx) => {
    return tx.executeSql(
      `select * from items where done = 0;`,
      undefined,
      (_, { rows: { _array } }) => f(_array)
    );
  });
} 

export const insertTodo = (text: string, db: SQLite.WebSQLDatabase | {
  transaction: () => {
      executeSql: () => void;
  };
}, f: number | (() => void)) => {
  db.transaction(
    (tx) => {
      tx.executeSql("insert into items (done, value) values (0, ?)", [text]);
      tx.executeSql("select * from items", [], (_, { rows }) =>
        console.log(JSON.stringify(rows))
      );
    },
    () => {},
    f
  ); 
}

export const doneTodo = (id: number,db: SQLite.WebSQLDatabase | {
  transaction: () => {
      executeSql: () => void;
  };
}, f: (() => void) | number ) => {
  db.transaction(
    (tx) => {
      tx.executeSql(`update items set done = 1 where id = ?;`, [
        id,
      ]);
    },
    () => {},
    f
  )
}
