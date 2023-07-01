-- Find the item that has the minimum weight:

SELECT * FROM ITEMS
WHERE WEIGHT = (SELECT MIN(WEIGHT) FROM ITEMS);

-- Find the different warehouses in "Pune":

SELECT WAREHOUSES.* FROM WAREHOUSES
INNER JOIN CITIES ON WAREHOUSES.CITY = CITIES.CITY
WHERE CITIES.CITY = 'Pune';

-- Find the details of items ordered by a customer "Mr. Patil":

SELECT DISTINCT I.*
FROM ITEMS I
JOIN ORDERED_ITEMS OI ON I.ITEMNO = OI.ITEMNO
JOIN ORDERS O ON OI.ONO = O.ONO
JOIN CUSTOMER C ON O.CNO = C.CNO
WHERE C.CNAME = 'Mr. Patil';

-- Find a Warehouse which has maximum stores.

SELECT WID, WNAME, COUNT(SID) AS StoreCount
FROM WAREHOUSES
LEFT JOIN STORES ON WAREHOUSES.WID = STORES.WID
GROUP BY WID, WNAME
ORDER BY StoreCount DESC
LIMIT 1;

-- Find an item which is ordered for a minimum number of times.

SELECT I.*, COUNT(OI.ITEMNO) AS OrderedTimes
FROM ITEMS I
LEFT JOIN ORDERED_ITEMS OI ON I.ITEMNO = OI.ITEMNO
GROUP BY I.ITEMNO, I.DESCRIPTION, I.WEIGHT, I.COST
ORDER BY OrderedTimes
LIMIT 1;
