# cron

A program to parse a cron string to expand the time fields and output a description of when the command will be run.

To execute a programe please use the following command

```
$ npm run cron "*/20 1-3 10,11 * * echo hello"
```

or

```
$ node cron "*/20 1-3 10,11 * * echo hello"
```

it would output the following:

```
minute:  [ 0, 20, 40 ]
hour:  [ 1, 2, 3 ]
day of month:  [ 10, 11 ]
month:  [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12 ]
day of week:  [ 1, 2, 3, 4, 5, 6, 7 ]
command:  echo hello
```

Use the following command to run all tests:

```
$ npm run test
```

## Notes

This program is not support non-standard scheduling definitions, e.g. `@yearly`, `@monthly`, `@every`, `@hourly`, `@daily` and etc.
