Search.setIndex({"docnames": ["cvat/annotating", "cvat/exporting", "cvat/getting-started", "intro", "misc/blueberry", "misc/demosite", "misc/docsite", "misc/terms", "roboflow/annotating", "roboflow/exporting", "roboflow/getting-started", "scripts/annotator", "scripts/scripts", "scripts/software", "yolo/cross-validation", "yolo/lambda-linux", "yolo/predicting", "yolo/results", "yolo/training", "yolo/validating", "yolo/venv"], "filenames": ["cvat\\annotating.md", "cvat\\exporting.md", "cvat\\getting-started.md", "intro.md", "misc\\blueberry.md", "misc\\demosite.md", "misc\\docsite.md", "misc\\terms.md", "roboflow\\annotating.md", "roboflow\\exporting.md", "roboflow\\getting-started.md", "scripts\\annotator.md", "scripts\\scripts.md", "scripts\\software.md", "yolo\\cross-validation.md", "yolo\\lambda-linux.md", "yolo\\predicting.md", "yolo\\results.md", "yolo\\training.md", "yolo\\validating.md", "yolo\\venv.md"], "titles": ["Annotating", "Exporting an Annotated Dataset (to Lambda)", "Getting Started with CVAT", "Welcome to the Rowan Blueberry Docs", "What Blueberries Look Like", "Demo Website", "How to Work on the Documentation Website (This Site!)", "Important Terms &amp; Definitions", "Annotating", "Exporting an Annotated Dataset", "Getting Started with Roboflow", "Rowan Annotator", "Custom-Made Scripts for this Project", "Software for the project", "How to Perform K-Fold Cross-Validation with YOLOv5", "Preparing Lambda &amp; Familiarizing with Linux", "Making Predictions with YOLOv5", "Visualizing &amp; Analyzing Model Training Metrics", "Training a YOLOv5 Model", "Validating a YOLOv5 Model", "Virtual Environments in Python Projects"], "terms": {"In": [0, 1, 2, 8, 10, 14, 15, 17, 18, 19, 20], "thi": [0, 2, 3, 8, 9, 10, 11, 13, 14, 15, 16, 18, 19, 20], "section": [0, 1, 2, 8, 9, 10, 18, 20], "we": [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20], "discuss": [0, 8], "onli": [0, 1, 7, 8, 11, 18, 19], "how": [0, 1, 2, 3, 4, 7, 8, 13, 15, 16, 18, 19, 20], "previou": [0, 3, 8, 14], "student": [0, 1, 2, 8, 9, 10, 13, 14], "our": [0, 1, 2, 7, 8, 10, 11, 12, 14, 16, 18, 19], "dataset": [0, 3, 7, 8, 10, 12, 13, 16], "what": [0, 1, 3, 8, 10, 11, 15, 16, 18, 19, 20], "look": [0, 1, 3, 7, 10, 14, 16, 18, 19], "like": [0, 1, 3, 8, 10, 11, 12, 13, 14, 16, 18, 19, 20], "open": [0, 1, 10, 11, 15, 16, 18, 19], "up": [0, 1, 2, 7, 8, 11, 14, 15, 18, 20], "job": [0, 8, 11, 14, 18, 19], "alreadi": [0, 2, 8, 11, 20], "ha": [0, 1, 2, 3, 8, 10, 11], "some": [0, 2, 7, 8, 9, 12, 19, 20], "progress": [0, 5, 6, 11, 12, 17], "so": [0, 1, 2, 8, 9, 10, 12, 14, 15, 16, 18, 19, 20], "ar": [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20], "multipl": [0, 10, 14], "object": [0, 7], "list": [0, 13], "right": [0, 1, 8, 11, 16, 20], "side": [0, 8, 10, 11, 16], "screen": [0, 1, 10], "To": [0, 1, 2, 8, 11, 12, 14, 15, 16, 18, 19, 20], "begin": [0, 4, 10], "can": [0, 1, 2, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20], "click": [0, 1, 2, 8, 9, 10, 11], "draw": [0, 8], "new": [0, 1, 8, 10, 11, 15, 20], "rectangl": 0, "tool": [0, 2, 7, 8], "press": [0, 15], "n": [0, 9, 14], "shortcut": [0, 8], "kei": 0, "box": [0, 1, 2, 7, 8, 11], "choos": [0, 2, 9, 11, 16], "type": [0, 1, 2, 7, 8, 12, 19], "label": [0, 1, 2, 8, 10, 16, 18, 19], "want": [0, 1, 8, 9, 10, 11, 14, 16, 18, 19], "creat": [0, 1, 2, 3, 7, 9, 11, 13, 14, 15, 18], "green": [0, 1, 4, 8], "blue": [0, 1, 2, 4, 8], "keep": [0, 7, 9, 11], "other": [0, 12, 14, 18, 19, 20], "set": [0, 2, 7, 9, 10, 11, 14, 15, 16, 18, 19, 20], "same": [0, 1, 2, 8, 12, 19, 20], "As": [0, 1, 12], "mention": [0, 1, 18], "earlier": 0, "keyboard": [0, 8], "i": [0, 7, 8, 9, 15, 16, 18, 19, 20], "recommend": [0, 8, 15, 18], "you": [0, 1, 2, 4, 7, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20], "dedic": 0, "your": [0, 1, 2, 8, 10, 11, 14, 15, 16, 18, 19, 20], "non": [0, 7], "domin": 0, "hand": [0, 8, 9, 10, 11, 16], "after": [0, 7, 9, 12, 18, 19], "each": [0, 2, 10, 11, 16, 18, 19, 20], "exampl": [0, 1, 2, 8, 11, 14, 18, 19, 20], "did": [0, 8], "blueberri": [0, 8, 10], "second": 0, "auto": 0, "select": [0, 1, 7, 11], "last": [0, 3, 8, 18], "when": [0, 1, 4, 10, 11, 12, 14, 16, 18, 19, 20], "do": [0, 2, 4, 8, 9, 10, 11, 14, 15, 16, 18], "all": [0, 1, 8, 11, 12, 14, 16, 18, 19, 20], "one": [0, 1, 9, 11, 14, 16, 20], "class": [0, 1, 11], "time": [0, 4, 8, 11, 14, 18], "save": [0, 1, 7, 8, 11, 12, 14, 15, 16, 19, 20], "feel": [0, 8], "out": [0, 1, 7, 11, 12, 18, 19], "over": [0, 4, 8, 9, 11, 14, 16], "complet": [0, 9], "view": [0, 7, 8, 10], "highli": 0, "slide": [0, 8], "down": [0, 1, 11, 18, 19], "until": 0, "encount": [0, 18], "addit": [0, 11, 19], "berri": [0, 1, 2, 4, 8, 11], "snake": 0, "pattern": [0, 7], "ensur": [0, 8, 18, 20], "cover": [0, 9, 20], "entir": [0, 8, 11], "imag": [0, 1, 2, 7, 8, 9, 10, 11, 12, 13, 14, 19], "without": [0, 1, 2, 18, 20], "miss": [0, 8, 18], "ani": [0, 1, 8, 9, 11, 14, 15, 18, 19], "Be": [0, 14], "sure": [0, 8, 14, 15, 18], "fit": [0, 8], "bound": [0, 2, 7, 8, 11], "tightli": 0, "around": [0, 8, 11, 18], "hundr": 0, "thousand": 0, "mai": [0, 1, 8, 11, 14, 15, 18], "sloppi": 0, "thankfulli": 0, "adjust": [0, 8, 11, 18], "exist": [0, 1, 7, 10, 19, 20], "It": [0, 1, 12, 14, 16, 18, 19], "s": [0, 1, 2, 3, 4, 8, 11, 14, 16, 18, 19, 20], "import": [0, 1, 3, 8, 10, 12, 14], "accur": [0, 8, 16, 18], "wouldn": 0, "t": [0, 1, 9, 16, 18, 19, 20], "suggest": 0, "hyper": 0, "fixat": 0, "tini": 0, "fix": [0, 8, 13, 18], "larger": [0, 18], "more": [0, 1, 2, 4, 8, 9, 11, 13, 14, 15, 16, 18, 19], "difficult": [0, 8], "due": [0, 12], "occlus": [0, 7], "shadow": 0, "leav": 0, "etc": [0, 1, 2, 10, 19], "let": [0, 1, 2, 8, 11, 16, 18, 19, 20], "see": [0, 1, 3, 4, 8, 10, 11, 12, 13, 14, 20], "harder": [0, 4, 18], "would": [0, 9, 11, 18, 19], "wa": [0, 10, 19, 20], "bit": [0, 1, 8, 18, 19], "challeng": 0, "especi": 0, "stack": 0, "top": [0, 1, 8, 11, 18, 19], "make": [0, 1, 3, 8, 9, 10, 11, 14, 15, 18, 19, 20], "where": [0, 1, 4, 7, 9, 11, 15, 16, 18, 20], "cluster": [0, 8], "tip": [0, 8], "hide": [0, 16], "show": [0, 11, 19, 20], "h": [0, 2, 10], "often": 0, "bush": [0, 1, 2, 10], "background": [0, 7, 8, 12], "have": [0, 1, 2, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 20], "visibl": 0, "veri": [0, 1, 2, 4, 8, 14, 19], "which": [0, 1, 2, 4, 8, 9, 10, 11, 12, 14, 18], "lot": [0, 8], "work": [0, 1, 2, 3, 8, 11, 12, 14, 18, 19, 20], "Or": [0, 1, 2], "fulli": 0, "shouldn": [0, 19], "try": [0, 18, 20], "tri": 0, "my": [0, 2, 8, 15, 16], "best": [0, 1, 11, 18, 19], "mani": [0, 2, 12, 14, 18, 19], "blurri": 0, "blob": 0, "center": [0, 1], "distinguish": 0, "an": [0, 3, 7, 8, 11, 16, 18, 19, 20], "individu": [0, 11], "If": [0, 1, 2, 8, 9, 10, 11, 14, 15, 16, 18, 19, 20], "re": [0, 1, 14, 16, 18, 19, 20], "thei": [0, 1, 8, 15, 18, 20], "altern": [0, 16, 20], "between": [0, 7, 11, 14, 16], "zoom": [0, 8, 9], "mous": 0, "wheel": 0, "chang": [0, 1, 2, 8, 11, 16], "perspect": 0, "now": [0, 1, 2, 8, 9, 13, 14, 16, 18, 19, 20], "know": [0, 1, 2, 4, 8, 11, 14, 16, 18, 19, 20], "effect": [0, 14], "With": [0, 1, 2, 8, 11, 14, 16, 18, 19, 20], "inform": [0, 1, 2, 13, 14, 15, 16, 18, 19], "continu": [0, 1, 2, 14, 18, 19], "export": [0, 3, 14, 18], "data": [0, 1, 7, 8, 9, 10, 11, 12, 13, 14, 18, 19], "train": [1, 3, 7, 9, 19], "resourc": 1, "intens": 1, "requir": [1, 10, 15, 18], "us": [1, 2, 7, 8, 9, 11, 12, 13, 14, 15], "util": [1, 12, 15, 18], "power": [1, 11], "server": [1, 2, 7, 16], "order": [1, 7, 12, 18, 19, 20], "need": [1, 2, 9, 11, 12, 14, 15, 16, 18, 19, 20], "process": [1, 2, 8, 10, 11, 12, 14, 18, 20], "troublesom": 1, "document": [1, 3, 15, 20], "should": [1, 2, 4, 8, 9, 10, 11, 12, 14, 15, 16, 18, 19, 20], "easier": [1, 8, 12, 13, 18, 19], "go": [1, 8, 9, 11, 14, 15, 18], "task": [1, 11], "wish": [1, 2, 20], "action": 1, "Then": 1, "pop": [1, 11], "On": [1, 2, 11], "format": [1, 11], "yolo": [1, 7, 9, 11, 18], "1": [1, 2, 8, 9, 11, 18], "locat": [1, 14, 15, 16], "bottom": [1, 8], "drop": 1, "menu": [1, 11], "enabl": 1, "toggl": 1, "give": [1, 8, 16], "name": [1, 2, 7, 10, 11, 15, 16, 18, 19, 20], "follow": [1, 8, 10, 12, 15, 18, 19, 20], "convent": 1, "outlin": 1, "here": [1, 9, 10, 14, 15, 18, 19], "start": [1, 3, 4, 7, 18, 19], "download": [1, 13], "local": [1, 2, 7, 16], "zip": [1, 11, 13], "extract": 1, "from": [1, 2, 8, 10, 12, 14, 15, 18, 19], "actual": [1, 16, 20], "problem": [1, 8, 14], "becaus": [1, 2, 7, 9, 11, 18], "isn": [1, 18], "tradition": [1, 20], "kept": 1, "separ": [1, 9], "could": [1, 11], "problemat": 1, "yaml": [1, 13, 18, 19], "script": [1, 7, 9, 13, 14, 16, 20], "resolv": 1, "doe": 1, "research": 1, "project": [1, 3, 7, 8, 14, 15], "platform": [1, 7, 18], "fall": 1, "2023": [1, 3], "switch": [1, 8, 18], "mean": [1, 2, 16], "match": 1, "organ": [1, 2, 7], "older": [1, 14], "seri": [1, 7], "step": [1, 8, 9, 10, 12, 14, 16, 18], "But": [1, 4, 10], "befor": [1, 2, 4, 7, 11, 14, 15, 18, 20], "blindli": 1, "those": [1, 16, 18, 19, 20], "must": [1, 15], "most": [1, 4, 10, 11, 13, 14], "directori": [1, 12, 15, 18, 19, 20], "abov": [1, 20], "within": [1, 12, 20], "subdirectori": 1, "valid": [1, 3, 7, 9], "test": [1, 7, 9, 12, 14, 18], "whether": 1, "depend": [1, 7, 8, 9, 14, 18], "case": [1, 4, 10, 11, 14, 18], "two": [1, 8, 16], "guess": 1, "found": [1, 8, 14, 16, 20], "txt": [1, 11, 15, 18, 19], "final": [1, 10], "level": [1, 11], "special": [1, 14], "just": [1, 8, 9, 11], "think": 1, "anoth": [1, 7, 18], "kind": [1, 2, 7, 11, 14, 18], "store": 1, "path": [1, 14, 15, 16, 18, 19], "either": [1, 12, 14, 18], "insid": 1, "someth": [1, 14, 16], "differ": [1, 4, 7, 8, 12, 15, 18, 19], "training_data": [1, 18], "dataset_nam": [1, 19], "val": [1, 12], "nc": 1, "2": [1, 2, 3, 8, 9, 11, 12, 18], "valu": [1, 11], "rel": 1, "py": [1, 14], "detect": [1, 7], "default": [1, 10, 11, 16, 18, 19, 20], "yolov5": [1, 9, 12], "repositori": [1, 12, 14, 16], "incorrect": 1, "run": [1, 2, 7, 12, 14, 15, 16, 18, 19, 20], "produc": [1, 2, 13], "error": [1, 11, 20], "relat": [1, 7, 20], "don": [1, 16, 20], "easi": [1, 20], "tell": [1, 18, 19, 20], "That": 1, "absolut": 1, "avoid": [1, 19], "issu": [1, 14], "also": [1, 2, 11, 12, 14, 15, 18, 19], "mnt": [1, 15, 18, 20], "data2": [1, 15, 18, 20], "drone": [1, 2, 3, 15, 18, 20], "your_nam": [1, 16, 18, 20], "number": [1, 14, 18, 20], "tediou": 1, "custom": [1, 3], "made": [1, 3, 8, 13, 15, 18], "applic": 1, "expedit": 1, "program": [1, 11, 13], "call": [1, 8, 12, 18, 20], "websit": [1, 3], "softwar": [1, 3], "page": [1, 2, 13], "note": [1, 8, 11, 14, 15, 18], "18": 1, "24": [1, 11, 12], "NOT": [1, 11, 14, 16], "mac": 1, "linux": [1, 3, 7, 9], "folder": [1, 2, 11, 12, 13, 15, 18], "execut": [1, 7, 11, 20], "perhap": 1, "version": [1, 3, 10, 11, 20], "releas": [1, 13], "its": [1, 4, 7, 12, 14], "core": 1, "capabl": 1, "help": [1, 2, 4, 7, 9, 10], "brows": 1, "window": [1, 16], "explor": [1, 2, 11], "allow": [1, 11, 12, 14, 16, 20], "current": [1, 7, 12, 20], "displai": [1, 11], "pictur": [1, 2, 8, 10, 16], "take": [1, 8, 12, 14, 16], "refactor": 1, "describ": 1, "replac": [1, 2, 11, 15], "old": [1, 9, 12], "later": [1, 8, 11, 18], "configur": [1, 2, 7], "These": [1, 7, 11, 12], "assign": [1, 2, 8, 10, 12, 14], "certain": [1, 15, 18], "percentag": [1, 18], "possibl": [1, 2, 14, 20], "seed": [1, 12], "random": [1, 12], "And": [1, 7, 8, 10, 11, 12, 14], "lastli": [1, 15], "present": [1, 20], "add": [1, 2, 8, 9, 16, 20], "them": [1, 2, 7, 10, 11, 12, 15, 16, 18], "edit": [1, 11], "below": [1, 3, 14, 16], "scp": [1, 13], "wai": [1, 2, 8, 9, 11, 14, 18, 19, 20], "transfer": 1, "remot": 1, "destin": [1, 9, 16], "onto": [1, 8, 13], "fill": 1, "usernam": 1, "password": 1, "thing": [1, 8, 9, 10, 18, 19], "part": [1, 2, 12, 14, 19], "function": [1, 11, 18, 19], "previous": [1, 11, 18], "correct": [1, 8, 10, 16], "origin": [1, 18], "still": [1, 11], "e": [1, 2, 7], "g": [1, 2], "scorch": 1, "json": 1, "load": [1, 11], "subsequ": [1, 2, 12], "There": [1, 8, 10, 11, 12, 18], "option": [1, 2, 9, 10, 13, 19], "remov": [1, 8], "TO": 1, "dropdown": [1, 2], "close": [1, 15], "pane": 1, "variou": [1, 13, 18], "correctli": 1, "specifi": [1, 12, 19], "hold": [1, 8, 11], "detail": [1, 2, 10, 14, 18], "ing": 1, "newer": [1, 19], "color": [1, 2], "scheme": 1, "ceh": 1, "guid": [2, 9, 10], "prospect": [2, 9, 10], "transit": [2, 10], "next": [2, 10, 18, 20], "annot": [2, 3, 4, 7, 10, 19], "The": [2, 4, 7, 8, 9, 11, 12, 14, 15, 16, 18, 19, 20], "host": [2, 7, 18], "share": [2, 20], "rowan": [2, 16], "math": [2, 3, 7], "depart": [2, 3, 7], "through": 2, "port": 2, "localhost": 2, "quickli": [2, 16], "review": 2, "normal": 2, "cisco": 2, "vpn": 2, "termin": [2, 9, 16, 18], "ssh": [2, 15], "putti": 2, "mobaxterm": [2, 16], "git": [2, 15], "bash": 2, "powershel": 2, "command": [2, 7, 14, 15, 18, 19, 20], "mchenr49": [2, 15], "lambda04": [2, 16], "edu": [2, 16], "school": [2, 10], "ll": [2, 15, 16, 18, 19, 20], "own": [2, 10, 14, 18, 19, 20], "again": 2, "8080": 2, "l": 2, "ve": 2, "browser": 2, "http": [2, 15], "address": [2, 10], "bar": 2, "email": [2, 10], "professor": [2, 10], "hieu": 2, "nguyen": [2, 10], "login": [2, 16], "account": 2, "greet": [2, 8, 10], "whole": [2, 8, 10, 16, 18], "A": [2, 7, 20], "specif": [2, 8, 10, 11, 14, 18], "count": [2, 11], "10": [2, 9, 14, 18], "photo": [2, 9, 10, 18, 19], "small": [2, 4, 12], "batch": [2, 14, 18, 19], "peopl": [2, 10], "brand": 2, "unlik": 2, "relev": 2, "submit": 2, "finish": [2, 8, 11, 13, 14, 18, 19], "far": 2, "essenti": [2, 8, 12], "inherit": 2, "defin": 2, "upload": [2, 10, 11], "obtain": [2, 16], "drive": 2, "advanc": 2, "qualiti": [2, 14], "100": [2, 9, 12, 14], "size": [2, 7, 12, 14, 16, 18, 19], "segment": [2, 7], "5": [2, 9, 11, 14], "uneven": 2, "3": [2, 9, 11, 12], "newli": [2, 10], "uniqu": [2, 7, 10], "video": 2, "refer": [2, 18], "frame": 2, "across": 2, "contain": [3, 11, 12, 13, 14, 15], "were": [3, 11, 14, 19], "univers": 3, "ai": 3, "been": [3, 8, 11], "combin": 3, "team": [3, 10, 13, 18], "member": 3, "chau": 3, "tran": 3, "brandon": [3, 8, 11, 19], "mchenri": [3, 8, 11], "6": 3, "28": 3, "updat": [3, 11, 13], "8": [3, 11, 18], "2024": 3, "tabl": [3, 19], "content": [3, 11], "quick": 3, "access": 3, "get": [3, 4, 18, 19, 20], "lambda": [3, 7, 12, 13, 14, 18, 20], "virtual": [3, 7, 15, 18], "environ": [3, 7, 16, 18], "python": [3, 7, 16, 19], "prepar": 3, "familiar": 3, "model": [3, 7, 9, 14, 16], "perform": [3, 7, 18, 19], "k": 3, "fold": [3, 7, 9], "cross": [3, 7, 9], "demo": 3, "site": 3, "term": 3, "definit": 3, "growth": 4, "cycl": 4, "obviou": [4, 16], "characterist": 4, "round": 4, "shape": 4, "crown": 4, "arguabl": 4, "pad": 4, "stage": [4, 8], "cup": 4, "ripe": 4, "pink": 4, "variabl": 4, "At": [4, 11, 18, 19], "almost": [4, 14], "red": 4, "IN": [5, 6, 12], "deep": 7, "learn": [7, 19, 20], "subset": 7, "machin": [7, 16], "larg": [7, 8], "concern": 7, "ultralyt": [7, 18, 19], "stand": 7, "onc": [7, 8, 9, 10, 11, 14, 15], "cvat": [7, 14, 18], "free": [7, 8], "comput": 7, "vision": 7, "roboflow": [7, 8, 9, 13], "paid": 7, "augment": [7, 9, 19], "onlin": 7, "intend": [7, 12, 18], "predict": [3, 7, 14, 18, 19], "drawn": [7, 16], "user": [7, 8, 20], "blockag": 7, "bashrc": 7, "file": [7, 11, 12, 13, 14, 16, 18, 19], "initi": [7, 13], "isol": 7, "singl": [7, 12, 18], "techniqu": 7, "increas": [7, 15, 18], "manipul": 7, "pipe": 7, "flag": 7, "send": [7, 16], "output": [7, 12, 20], "shell": 7, "nohup": [7, 12], "append": [7, 12], "put": [7, 12, 15, 20], "comet": 7, "past": [7, 9], "ml": 7, "well": [7, 9, 11, 14, 18, 19], "compil": 7, "report": 7, "base": 7, "assess": 7, "gener": [7, 8, 10, 13, 18, 20], "independ": 7, "robust": 7, "partit": 7, "rest": [7, 14], "underfit": [7, 14], "unabl": 7, "captur": 7, "relationship": 7, "input": [7, 19], "overfit": [7, 14], "pick": 7, "rather": [7, 14, 15, 18], "than": [7, 11, 14, 15, 16, 18], "itself": [7, 10], "maximum": 7, "suppress": 7, "overlap": 7, "straight": 8, "forward": 8, "whomev": 8, "yet": 8, "home": 8, "forese": [8, 15], "futur": 8, "chose": [8, 9], "sit": 8, "while": [8, 11, 20], "everi": [8, 14, 18], "Not": [8, 10, 19], "necessarili": [8, 19], "moment": [8, 9], "first": [8, 9, 10, 14, 16, 20], "spot": 8, "idea": [8, 10, 14, 18, 19], "much": [8, 10, 14, 18], "els": [8, 9, 14, 18], "vari": 8, "rule": 8, "snug": 8, "person": 8, "loos": 8, "opinion": 8, "good": [8, 10, 18, 19, 20], "done": [8, 9, 11, 16], "quit": 8, "mistak": 8, "soon": 8, "group": [8, 10], "typo": 8, "revers": 8, "scale": 8, "manual": [8, 9, 11, 19, 20], "goal": 8, "whatev": [8, 11, 20], "lengthi": 8, "coupl": [8, 18, 19], "worth": 8, "workflow": [8, 14, 18], "effici": [8, 11], "faster": [8, 12], "d": [8, 16], "drag": 8, "move": [8, 11, 16], "b": 8, "back": [8, 11, 12, 16], "both": [8, 12], "howev": [8, 20], "even": 8, "By": [8, 11, 12, 16, 18, 19, 20], "ctrl": [8, 15], "temporarili": 8, "mode": 8, "automat": [8, 9, 11], "happen": [8, 11, 14, 18], "hit": [8, 11], "backspac": 8, "twice": 8, "advic": 8, "discret": 8, "lower": 8, "left": [8, 9, 10, 11, 18], "corner": 8, "column": 8, "repeat": 8, "method": [8, 9, 14], "tab": [9, 10], "toolbar": 9, "reason": [9, 15], "sourc": [9, 15, 20], "split": [9, 13, 14, 18], "90": 9, "explain": 9, "purpos": 9, "plan": 9, "haven": [9, 16, 18], "realli": [9, 18], "preprocess": 9, "won": 9, "4": [9, 12], "cocosplit": 9, "robosplit": 9, "crop": 9, "76": 9, "78": 9, "per": 9, "convert": 9, "usabl": 9, "coco": 9, "fashion": [9, 19], "anyth": [9, 18, 19, 20], "v5": 9, "pytorch": 9, "simpli": [9, 10, 18], "copi": [9, 14, 16], "code": [9, 18, 20], "fairli": 10, "simpl": [10, 18, 19], "prefer": 10, "usual": 10, "facilit": 10, "ad": [10, 15, 18], "workspac": 10, "belong": 10, "pleas": [10, 13, 15, 20], "talk": 10, "attach": 10, "referenc": 10, "ex": [10, 12], "dsc_2237": 10, "phone": 10, "camera": 10, "enough": [10, 18], "alwai": [10, 14], "style": 10, "sampl": 10, "repres": [10, 14, 18], "date": [10, 11], "collect": 10, "along": 10, "someon": 10, "shown": 10, "clone": 12, "yolov5_script": [12, 14, 15, 16], "setup": 12, "bin": [12, 20], "7": 18, "easy_v": [], "fold_train": 14, "quick_val": [], "yolo_predictor": [], "includ": [12, 13, 18, 19], "print_dir": 12, "random_se": 12, "save_hyp": 12, "longer": [12, 13], "yolo_quick_fix": 12, "being": [11, 12, 14, 15], "randomli": 12, "replic": 12, "check": [12, 18, 19], "divid": [12, 18], "full": [12, 14, 18], "3000x4000": 12, "640x640": [12, 18, 19], "dimens": [12, 18, 19], "tile": [12, 14, 16, 18], "better": [12, 14], "squar": [12, 18, 19], "stitch": [12, 16], "togeth": [12, 16], "why": 12, "instead": 12, "paramet": [12, 16], "line": [12, 20], "necessari": [12, 19], "log": [12, 16, 18], "off": [11, 12, 16], "parameter1": 12, "parameter2": 12, "consol": 12, "numer": 13, "assist": 13, "serv": 13, "THE": 13, "recent": [11, 13], "v1": [11, 13], "overhaul": 13, "gui": 13, "implement": 13, "config": 13, "improv": 13, "oldest": 13, "02": 13, "bug": 13, "jpg": 13, "extens": 13, "support": 13, "01": [11, 13], "parent": 13, "root": 13, "structur": 13, "slightli": 15, "product": 15, "alias": 15, "For": [11, 14, 15, 18, 20], "speed": 15, "text": [15, 18, 19], "editor": [15, 18, 19], "nano": [15, 18, 19], "cd": [15, 18], "o": 15, "enter": 15, "x": 15, "repo": [14, 15, 18], "razzberry7": 15, "fork": [14, 15], "organiz": [], "mkdir": [], "design": [], "validation_data": 19, "result": 14, "instruct": [15, 20], "come": [14, 15, 18, 20], "handi": 15, "wherev": [11, 20], "typic": [], "read": [14, 15, 18, 19], "readm": 15, "equip": 18, "focu": 18, "goe": [11, 18], "figur": [18, 19], "practic": [18, 19, 20], "accord": [16, 18, 19], "usag": [], "comment": [18, 19], "gpu": [14, 18], "coco128": [18, 19], "weight": [18, 19], "pt": [18, 19], "img": [18, 19], "640": [18, 19], "seem": [18, 19], "pretti": [18, 19, 20], "pass": [11, 18, 19], "scroll": [18, 19], "find": [18, 19], "parse_opt": [18, 19], "notabl": [], "hyp": 18, "hyperparamet": 18, "epoch": [14, 18], "higher": 18, "quicken": 18, "cost": 18, "imgsz": [18, 19], "assum": [18, 19], "devic": 18, "standard": 20, "global": 20, "easili": [16, 20], "id": 20, "pycharm": 20, "visual": [3, 14, 20], "studio": 20, "mitig": [14, 20], "scratch": 20, "virtualenv": 20, "pip": 20, "instal": 20, "python_env2": 20, "empti": 20, "cursor": 20, "easiest": 20, "quickest": 20, "respect": 20, "exit": 20, "binari": [], "fortun": [16, 18, 20], "r": 20, "owner": [], "unfortun": [14, 20], "freez": 20, "filenam": 20, "portion": 20, "doesn": 20, "otherwis": 20, "overwrit": 20, "about": [14, 16, 19], "6507": [18, 19], "successfulli": [11, 18, 19], "readi": 18, "session": [11, 18], "obvious": 18, "metric": [3, 14, 18, 19], "dure": [18, 19], "cannot": [11, 18], "yourself": [11, 18], "dataset_assign": 18, "imagin": 18, "25": 18, "limit": 18, "50": 18, "250": 18, "forum": 18, "post": 18, "pipelin": [14, 18], "One": 18, "cut": [16, 18], "fullbushdivid": 18, "plai": 18, "topic": 18, "activ": [11, 16, 18], "some_dataset": 18, "300": 18, "32": [18, 19], "everyth": 18, "went": 18, "bunch": [18, 19], "might": [11, 18, 19], "encompass": 18, "spell": 18, "wrong": [14, 18], "sensit": 18, "OR": 18, "yell": 18, "forgot": 18, "probabl": 18, "nvidia": [14, 18], "smi": [14, 18], "alloc": 18, "knowledg": 18, "0": [11, 18], "navig": [11, 18], "training_nam": 18, "plot": [14, 18], "csv": [14, 18], "appli": [16, 18, 19], "tend": 18, "alphabet": 12, "check_repo": 12, "evaluate_dataset": 12, "test_cuda_devic": 12, "tackl": 14, "consid": 14, "indic": 14, "broken": 14, "equal": 14, "20": 14, "conduct": 14, "screenshot": 14, "depict": 14, "handl": 14, "ask": [14, 16], "variat": 14, "trainabl": 14, "abil": 14, "impact": 14, "statu": 14, "abl": [14, 16], "smaller": 14, "cuda": 14, "memori": 14, "among": 14, "lifetim": 14, "analyz": [3, 14], "compat": 14, "anymor": 14, "aspect": 14, "compar": 14, "averag": 14, "particularli": 14, "poorli": 14, "conclud": 14, "github": 15, "com": 15, "push": 15, "contributor": 15, "yolov5_requir": 15, "unsurprisingli": 16, "conflict": 16, "interest": 16, "aren": 16, "feed": 16, "prompt": [16, 19], "confid": [16, 19], "threshold": 16, "iou": 16, "beagnost": 16, "multi": 16, "score": 16, "behind": 16, "scene": 16, "predictor": 16, "system": 16, "sinc": 16, "m": 16, "masochist": 16, "area": 16, "png": 16, "fetch": 16, "head": 16, "unsur": 19, "doubl": 19, "via": 19, "spreadsheet": 19, "track": 19, "hybrid": 19, "conf": 19, "similar": 19, "least": 19, "few": 19, "receiv": 19, "roughli": 19, "classic": 19, "accomplish": 19, "manag": 19, "develop": 20, "expect": 20, "quirk": 20, "noth": 20, "googl": 20, "cv2": 20, "opencv": 20, "unzip": 11, "button": 11, "whichev": 11, "confirm": 11, "notic": 11, "arrai": 11, "dispos": 11, "delet": 11, "AND": 11, "meanwhil": 11, "intention": 11, "appear": 11, "rememb": 11, "obj_train_data": 11, "job_38_i": 11, "had": 11, "sometim": 11, "luke": 11, "tonon": 11, "written": 11, "autosav": 13, "featur": [11, 13], "pc": 11, "crash": 11, "interv": 11, "turn": 11, "greater": 11, "instant": 11, "amount": 11, "minut": 11, "instantli": 11, "image_nam": 11, "_": 11}, "objects": {}, "objtypes": {}, "objnames": {}, "titleterms": {"annot": [0, 1, 8, 9, 11, 13], "get": [0, 2, 8, 10], "start": [0, 2, 8, 10], "cvat": [0, 1, 2, 3, 11, 13], "usual": 0, "case": 0, "medium": 0, "hard": 0, "conclus": [0, 1, 2, 14, 16, 18, 19], "export": [1, 9, 11, 13, 16], "an": [1, 9, 10], "dataset": [1, 2, 9, 11, 14, 18, 19], "lambda": [1, 2, 15, 16], "file": [1, 15, 20], "structur": 1, "model": [1, 2, 12, 17, 18, 19], "after": 1, "roboflow": [1, 3, 10], "recreat": 1, "thi": [1, 6, 12], "The": [1, 10], "helper": [1, 13], "button": 1, "set": 1, "log": 2, "onto": [2, 11], "connect": 2, "via": 2, "open": 2, "tab": 2, "make": [2, 12, 16], "project": [2, 10, 12, 13, 20], "new": [2, 9, 16], "task": 2, "job": 2, "addit": 2, "what": [2, 4, 14], "look": [2, 4], "like": [2, 4], "welcom": 3, "rowan": [3, 11, 13], "blueberri": [3, 4], "doc": 3, "us": [3, 16, 18, 19, 20], "yolov5": [3, 14, 15, 16, 18, 19], "script": [3, 12, 15, 18, 19], "tool": [3, 11], "misc": 3, "demo": 5, "websit": [5, 6], "how": [6, 14], "work": 6, "document": 6, "site": 6, "import": [7, 11], "term": 7, "definit": 7, "gener": 9, "version": [9, 13], "creat": [10, 20], "account": 10, "home": 10, "page": 10, "custom": [12, 15], "made": 12, "train": [12, 14, 16, 17, 18], "1": [12, 13, 14, 15], "time": 12, "dataset_assign": 12, "fullbushdivid": 12, "k": [12, 14], "fold": [12, 14], "cross": [12, 14], "valid": [12, 14, 18, 19], "softwar": 13, "1x": 13, "0x": 13, "perform": 14, "prepar": [15, 18, 19], "familiar": 15, "linux": 15, "edit": 15, "bashrc": 15, "add": 15, "alia": 15, "es": 15, "2": [14, 15], "clone": 15, "repositori": 15, "setup": 15, "3": [14, 15], "environ": [15, 20], "4": 15, "5": 15, "chang": 15, "config": 15, "ini": 15, "valu": 15, "understand": [18, 19], "py": [12, 16, 18, 19], "virtual": 20, "python": [18, 20], "activ": 20, "deactiv": 20, "download": 20, "packag": [18, 20], "from": [11, 16, 20], "requir": 20, "txt": 20, "usag": [18, 19], "notabl": [18, 19], "paramet": [18, 19], "predict": [12, 16], "assign": 18, "imag": [16, 18], "augment": [14, 18], "potenti": 18, "error": 18, "filenotfound": 18, "some": 18, "Not": 18, "instal": 18, "someth": 18, "about": 18, "cuda": 18, "memori": 18, "see": [16, 18, 19], "result": [16, 18, 19], "fold_train": 12, "easy_v": [12, 19], "quick_val": 12, "yolo_predictor": [12, 16], "background": 14, "0": 14, "assess": 14, "each": 14, "prerequisit": 16, "weight": 16, "scp": 16, "command": 16, "visual": 17, "analyz": 17, "metric": 17, "val": 19, "cursor": 11, "drag": 11, "draw": 11, "re": 11, "autosav": 11}, "envversion": {"sphinx.domains.c": 2, "sphinx.domains.changeset": 1, "sphinx.domains.citation": 1, "sphinx.domains.cpp": 6, "sphinx.domains.index": 1, "sphinx.domains.javascript": 2, "sphinx.domains.math": 2, "sphinx.domains.python": 3, "sphinx.domains.rst": 2, "sphinx.domains.std": 2, "sphinx.ext.intersphinx": 1, "sphinx": 56}})