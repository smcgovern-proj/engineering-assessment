## Import Process
### clean + copy data (commands in nushell):
```
xsv select locationid, Applicant,cnn,Address, import_data.csv | save cleaned_data.csv
sudo docker cp ./cleaned_data.csv engineering-assessment-postgres-1:/import_data.csv
```

### import into postgres:
```
docker exec -it engineering-assessment-postgres-1 sh
psql -U postgres
\c postgres
create table trucks (locationid varchar(255), Applicant varchar(255), cnn varchar(255), Address varchar(255));
\copy trucks from 'import_data.csv' with (format csv, delimiter ',');
```
