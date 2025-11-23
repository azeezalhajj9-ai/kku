<?php
$file = 'visitors.json';

try {
    // إنشاء الملف إذا ما كان موجود بدون تصفيره لاحقًا
    if (!file_exists($file)) {
        $init = ['count' => 0];
        if (!file_put_contents($file, json_encode($init, JSON_PRETTY_PRINT), LOCK_EX)) {
            throw new Exception("تعذر إنشاء ملف JSON. تحقق من صلاحيات المجلد.");
        }
    }

    // قراءة المحتوى
    $content = file_get_contents($file);
    $data = json_decode($content, true);

    // إذا الملف موجود لكن فاضي أو تالف
    if (!is_array($data) || !isset($data['count']) || !is_numeric($data['count'])) {
        throw new Exception("ملف JSON تالف أو لا يحتوي على بيانات صحيحة.");
    }

    // تحديث العدد
    $data['count']++;

    // حفظ المحتوى بشكل آمن
    if (!file_put_contents($file, json_encode($data, JSON_PRETTY_PRINT), LOCK_EX)) {
        throw new Exception("تعذر كتابة البيانات إلى ملف JSON.");
    }

    // إخراج النتيجة
    header('Content-Type: application/json');
    echo json_encode(['visitors' => $data['count']]);

} catch (Exception $e) {
    header('Content-Type: application/json');
    echo json_encode(['error' => $e->getMessage()]);
}
?>