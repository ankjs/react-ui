
input html element all properties in react js ui

When working with HTML input elements in React, you’re really dealing with two layers:

Standard HTML <input> attributes

React-specific props and behaviors (like controlled components)

Here’s a clear, structured breakdown of all commonly used input properties in React UI.

🔹 1. Basic HTML Input Attributes (Supported in React)
These work the same as plain HTML but use camelCase in React:

📌 Core attributes
type → text, password, email, number, checkbox, radio, file, etc.

name
value
defaultValue
placeholder
id
className (instead of class)
style

📌 State & behavior
disabled
readOnly
required

autoFocus

📌 Length & validation
minLength
maxLength
min
max
step

pattern

📌 Accessibility
aria-* (like aria-label, aria-required)

role

📌 Misc
autoComplete

inputMode (e.g. numeric, decimal)

list (for datalist)

multiple (file inputs)

accept (file types)

capture (camera/mic input)

🔹 2. React-Specific Input Props
These are where React becomes powerful.

📌 Controlled Inputs
value → controlled value
onChange → handler to update state

Example:

const [text, setText] = useState("");

<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
📌 Uncontrolled Inputs
defaultValue
ref

Example:

const inputRef = useRef();

<input type="text" defaultValue="Hello" ref={inputRef} />
🔹 3. Event Handlers (Very Important)
React supports many events on inputs:

📌 Keyboard
onKeyDown
onKeyUp
onKeyPress

📌 Mouse
onClick
onDoubleClick

📌 Focus
onFocus
onBlur

📌 Form/Input
onChange

onInput

onInvalid

onSubmit (form level)

📌 Clipboard
onCopy

onPaste

onCut

🔹 4. Special Input Types & Props
✅ Checkbox / Radio
checked

defaultChecked

<input
  type="checkbox"
  checked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
/>
✅ File Input
type="file"

accept

multiple

<input type="file" accept="image/*" multiple />
✅ Number Input
min, max, step

🔹 5. Styling Props
className

style={{}}

🔹 6. Example (All-in-One)
function Example() {
  const [value, setValue] = React.useState("");

  return (
    <input
      type="text"
      name="username"
      value={value}
      placeholder="Enter name"
      onChange={(e) => setValue(e.target.value)}
      maxLength={20}
      required
      disabled={false}
      autoFocus
      className="input-box"
      style={{ padding: "10px" }}
      onFocus={() => console.log("Focused")}
      onBlur={() => console.log("Blurred")}
    />
  );
}
🔹 7. Key React Rules ⚠️
Use className instead of class

Use htmlFor instead of for (in labels)

Controlled inputs = value + onChange

Don’t mix value and defaultValue

🔹 8. Rare but Useful Props
spellCheck

autoCapitalize

enterKeyHint

form

formAction

formMethod

If you want, I can also:

Give a complete cheat sheet PDF

Show form validation examples

Or build a full React form UI (login/signup)


explain all in Bengali 

React-এ <input> element-এর সব properties বাংলায় সহজভাবে বুঝিয়ে দিচ্ছি 👇

🔹 1. Basic HTML Input Properties (React-এও একই)
React-এ HTML-এর মতই কাজ করে, শুধু কিছু নাম camelCase হয়।

📌 সাধারণ attributes
type → ইনপুটের ধরন (text, password, email, number, checkbox, radio, file)

name → ফর্মে নাম শনাক্ত করার জন্য

value → ইনপুটের বর্তমান মান (controlled হলে)

defaultValue → শুরুতে default মান

placeholder → ইনপুটে হালকা লেখা (hint)

id → unique id

className → CSS class (HTML-এ class)

style → inline styling

🔹 2. Control & Behavior
disabled → ইনপুট বন্ধ (ব্যবহার করা যাবে না)

readOnly → শুধু পড়া যাবে, পরিবর্তন করা যাবে না

required → বাধ্যতামূলক ফিল্ড

autoFocus → পেজ লোড হলে auto focus হবে

🔹 3. Validation (ডাটা চেক করার জন্য)
minLength → সর্বনিম্ন কত অক্ষর

maxLength → সর্বোচ্চ কত অক্ষর

min → minimum number

max → maximum number

step → সংখ্যা কত করে বাড়বে (যেমন 1, 0.1)

pattern → regex দিয়ে validation

🔹 4. Accessibility (সহজ ব্যবহারযোগ্যতা)
aria-label

aria-required

role

👉 এগুলো screen reader ব্যবহারকারীদের জন্য গুরুত্বপূর্ণ

🔹 5. অন্যান্য দরকারি props
autoComplete → browser auto fill করবে কিনা

inputMode → mobile keyboard টাইপ (numeric, text)

multiple → একাধিক file select

accept → কোন ধরনের file নেওয়া হবে (image, pdf)

list → datalist এর সাথে কাজ করে

🔹 6. React Controlled Input (খুব গুরুত্বপূর্ণ)
React-এ সাধারণত input state দিয়ে control করা হয়।

const [text, setText] = useState("");

<input
  type="text"
  value={text}
  onChange={(e) => setText(e.target.value)}
/>
👉 এখানে:

value = state

onChange = update function

🔹 7. Uncontrolled Input
React state ছাড়া input handle করা হয়।

const ref = useRef();

<input type="text" defaultValue="Hello" ref={ref} />
🔹 8. Event Handlers (ইনপুটে কাজ ধরার জন্য)
📌 Keyboard
onKeyDown

onKeyUp

📌 Mouse
onClick

onDoubleClick

📌 Focus
onFocus

onBlur

📌 Input/Form
onChange → সবচেয়ে বেশি ব্যবহৃত

onInput

onSubmit (form-এ)

📌 Clipboard
onCopy

onPaste

onCut

🔹 9. Special Input Types
✅ Checkbox / Radio
checked

defaultChecked

<input
  type="checkbox"
  checked={isChecked}
  onChange={() => setIsChecked(!isChecked)}
/>
✅ File Input
<input type="file" accept="image/*" multiple />
✅ Number Input
min

max

step

🔹 10. Styling
className

style={{}}

🔹 11. গুরুত্বপূর্ণ React Rules ⚠️
class না, className ব্যবহার করতে হবে

for না, htmlFor (label-এ)

value + onChange = controlled input

value আর defaultValue একসাথে ব্যবহার করা যাবে না

🔹 12. কম ব্যবহার হয় কিন্তু দরকারি
spellCheck

autoCapitalize

enterKeyHint

🔚 সংক্ষেপে
👉 React-এ input দুইভাবে ব্যবহার হয়:

Controlled (state দিয়ে control)

Uncontrolled (ref দিয়ে)

👉 সবচেয়ে important:

value

onChange

type

placeholder

চাও হলে আমি:

একটা complete form project (login/signup) বানিয়ে দিতে পারি

বা practice problem + solution দিতে পারি 👍


list in one 

ঠিক আছে—সব <input> properties এক জায়গায় লিস্ট আকারে বাংলায় দিচ্ছি 👇

📋 React Input Element – All Properties List
🔹 Basic
type

name

value

defaultValue

placeholder

id

className

style

🔹 Control & State
disabled

readOnly

required

autoFocus

🔹 Validation
minLength

maxLength

min

max

step

pattern

🔹 Accessibility
aria-label

aria-required

aria-*

role

🔹 Events
onChange

onInput

onFocus

onBlur

onClick

onDoubleClick

onKeyDown

onKeyUp

onKeyPress

onCopy

onPaste

onCut

onInvalid

🔹 Checkbox / Radio
checked

defaultChecked

🔹 File Input
accept

multiple

capture

🔹 Other Useful
autoComplete

inputMode

list

spellCheck

autoCapitalize

enterKeyHint

form

formAction

formMethod

🔹 React Special
value (controlled)

defaultValue (uncontrolled)

ref

🔚 Shortcut মনে রাখার জন্য
👉 সবচেয়ে বেশি ব্যবহৃত:

type

value

onChange

placeholder

required

disabled

