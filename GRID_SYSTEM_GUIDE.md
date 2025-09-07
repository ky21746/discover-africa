# 🎯 מערכת גריד אחידה - מדריך שימוש

## 📋 **מטרה:**
להבטיח שכל הריבועים/בלוקים באתר יהיו מסודרים ומאורגנים בצורה מושלמת בכל העמודים.

## 🏗️ **מבנה המערכת:**

### **1. Container אחיד:**
```jsx
<div className="unified-container">
  {/* תוכן העמוד */}
</div>
```

### **2. גרידים שונים:**

#### **גריד ראשי (2 עמודות):**
```jsx
<div className="unified-grid-main">
  <div className="space-y-6">
    {/* תוכן ראשי */}
  </div>
  <div className="space-y-6">
    {/* סיידבר */}
  </div>
</div>
```

#### **גריד כרטיסים (3 עמודות):**
```jsx
<div className="unified-grid-cards">
  {/* כרטיסים */}
</div>
```

#### **גריד כרטיסים (2 עמודות):**
```jsx
<div className="unified-grid-cards-2">
  {/* כרטיסים */}
</div>
```

#### **גריד כרטיסים (4 עמודות):**
```jsx
<div className="unified-grid-cards-4">
  {/* כרטיסים */}
</div>
```

### **3. מרווחים אחידים:**
```jsx
<div className="unified-spacing">     {/* מרווח רגיל */}
<div className="unified-spacing-sm">  {/* מרווח קטן */}
<div className="unified-spacing-lg">  {/* מרווח גדול */}
```

### **4. בלוקים אחידים:**
```jsx
<section className="unified-block">      {/* בלוק לבן */}
<section className="unified-block-alt">  {/* בלוק אפור */}
```

### **5. כותרות אחידות:**
```jsx
<h3 className="unified-title">     {/* כותרת רגילה */}
<h2 className="unified-title-lg">  {/* כותרת גדולה */}
<h1 className="unified-title-xl">  {/* כותרת ענקית */}
```

### **6. כרטיסים אחידים:**
```jsx
<div className="unified-card">
  <div className="unified-card-image" style={{backgroundImage: 'url(...)'}} />
  <div className="unified-card-content">
    <h3 className="unified-card-title">כותרת</h3>
    <p className="unified-card-text">תוכן</p>
  </div>
</div>
```

### **7. כפתורים אחידים:**
```jsx
<button className="unified-btn">     {/* כפתור גדול */}
<button className="unified-btn-sm">  {/* כפתור קטן */}
```

### **8. תגיות אחידות:**
```jsx
<span className="unified-tag">     {/* תגית זהב */}
<span className="unified-tag-alt"> {/* תגית חומה */}
```

## 📱 **רספונסיביות:**
המערכת כוללת רספונסיביות מובנית:
- **מובייל:** עמודה אחת, מרווחים קטנים
- **טאבלט:** 2 עמודות, מרווחים בינוניים  
- **דסקטופ:** 3-4 עמודות, מרווחים גדולים

## 🎨 **צבעים אחידים:**
- **זהב:** `#CAA131` → `#B8942A`
- **חום כהה:** `#4B361C`
- **חום בינוני:** `#534B20`
- **אפור:** `#374151`

## ✅ **יתרונות:**
1. **עקביות** - כל העמודים נראים אחיד
2. **תחזוקה קלה** - שינוי אחד משפיע על הכל
3. **ביצועים** - CSS מותאם ואופטימלי
4. **נגישות** - רספונסיביות מובנית
5. **סדר וארגון** - בדיוק מה שביקשת!

## 🔄 **איך להחליף עמוד קיים:**
1. החלף `container mx-auto px-4 py-8` ב-`unified-container`
2. החלף `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3` ב-`unified-grid-cards`
3. החלף `space-y-6` ב-`unified-spacing`
4. החלף כותרות ב-`unified-title`
5. החלף בלוקים ב-`unified-block`

## 🎯 **דוגמה מלאה:**
```jsx
<div className="unified-container">
  <div className="unified-grid-cards">
    {items.map(item => (
      <div key={item.id} className="unified-card">
        <div className="unified-card-image" style={{backgroundImage: `url(${item.image})`}} />
        <div className="unified-card-content">
          <h3 className="unified-card-title">{item.name}</h3>
          <p className="unified-card-text">{item.description}</p>
          <button className="unified-btn">גלה עוד</button>
        </div>
      </div>
    ))}
  </div>
</div>
```
