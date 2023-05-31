CREATE OR REPLACE VIEW category_rows_view AS
SELECT *,
    jan + feb + mar + apr + may + jun + jul + aug + sep + oct + nov + dec AS total
FROM category_rows;